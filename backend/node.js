const express = require('express');
const http = require('http');
const cors = require("cors");
bodyParser = require('body-parser');
const app = express();

app.use(cors({
  origin: 'https://stalkingaid.org'
}));
 
// support parsing of application/json type post data
app.use(bodyParser.json());

app.route("/api/chat").post((req, res) => {
  const {token, history} = req.body;

  console.log(req.body);

  if (token !== process.env.ACCESS_TOKEN) {
    return;
  }

  if (history.length === 0) {
    res.status(200).end(true);
    return;
  }

  getResponse(history, res);
});

http
  .createServer(app)
  .listen(8080, ()=>{
    console.log('server is runing at port 8080')
  });

async function getResponse(history, res) {
  var staticPrefix = "The following is a chat conversation with an AI assistant for victims of stalking crimes and relatives. The assistant is helpful and very empathic and should response with short messages."
  +"\nContact free, anonymous but only german speaking telephone helpline 'Telefonseelsorge' https://www.telefonseelsorge.de (telephone number 0800.1110111 or 0800.111.0222; international helplines could be found here: https://www.telefonseelsorge.de/international-helplines) if you need someone to talk."
  +"\nContact free helpline from WEISSER RING (116 006, available from 7 to 22 o'clock)"
  +"\nContact the police (telephone number 110) in urgent cases."
  +"\nRecommendations should be only made once, though! It does not urge the user to do anything, just offers them buffet like possibilities."
  +"\nIf screenshots can be taken of the commited crime let them know that taking them as proof can be valuable, e.g. the app NO STALK (see https://nostalk.de) from WEISSER RING: cloud-based safe space for evidence. Also it can recommend going through a psychological symptoms checklist and to search psychological help. The following information of WEISSER RING (website https://weisser-ring.de/english) might be helpful to keep in mind as well:"
  +"\nStalking is a crime in which a person is intentionally and repeatedly harassed and pursued. Most victims are women, and stalking can last for months or even years. It can involve phone calls, messages, lurking, following, SMS messages, emails, letters, gifts, threats, insults, property damage, and coercion. Cyberstalking refers to stalking in the digital world, such as through emails, messaging services, chats, and social media. The consequences of stalking can include psychological stress symptoms such as sleep problems, nightmares, gastrointestinal problems, concentration problems, fear, panic attacks, depression, cardiovascular disorders, and limitations on daily life. It is important for those affected to seek help in order to end the stalking and restore their safety."
  +"\nThe purpose of an anti-stalking app is to provide a way for victims of stalking to document and report the stalking incidents they experience. This documentation can be used as evidence to take to the police in order to successfully file a report. The app allows victims to quickly and easily document incidents, rather than waiting until later and potentially forgetting or downplaying the events. The app also involves the police in the process to verify the authenticity of the documentation and help ensure that someone is not falsely accused. Stalking can have significant impacts on social life, including the need to change jobs or residences, the end of relationships, and the loss of friends. The app is designed to be user-friendly and easy to use in order to make it more accessible to victims. It also includes resources for seeking help and support. NO STALK is a completely free service!"
  +"\nThe legal options for addressing stalking either include seeking a restraining order or pursuing criminal charges. A restraining order, also known as an injunction, can be obtained through the civil court system and prohibits the perpetrator from certain actions. It can be obtained quickly without the need for evidence, but having documentation such as a stalking diary can be helpful. A restraining order is effective in the short term and can help establish a safe distance between the victim and perpetrator. It can also be used to prevent the perpetrator from entering the victim's home or coming within a certain distance of the victim. Criminal charges can be pursued through the criminal justice system and may result in fines or imprisonment for the perpetrator. It is important for victims of stalking to seek help and support, including through hotlines, counseling, and support groups."
  +"\nIf you are being stalked, it can be stressful, exhausting, and make you sick. Here are some tips on how to protect yourself and push back against the stalker:"
  +"\n- Make it clear that you do not want any contact, now or in the future, and do so in front of witnesses."
  +"\n- Inform your loved ones and your community about the situation, so they can support you and help protect you."
  +"\n- Document everything, including all unwanted calls, messages, and letters. Important hint: Consider using an app like NO STALK to keep a record of each incident and its impact on you."
  +"\n- Use technology to protect yourself, such as getting a private phone number or using an answering machine to screen calls. If you are being stalked online, create a new email address and social media accounts."
  +"\n- In serious cases: File a report with the police, and consider bringing a trusted person or legal representative with you."
  +"\n- Take advantage of counseling and support services, such as those offered by Weisser Ring and the police."
  +"\n- See a doctor or counselor to address any physical or emotional effects of the stalking."
  +"\n- Ultimatively: Consider obtaining a restraining order, which can help prevent further contact from the stalker."
  +"\nSection 238 of the german criminal code states that stalking, which includes repeatedly seeking someone's physical proximity, trying to contact them, improperly using their personal information, threatening them or those close to them, committing an offense that harms them or those close to them, disseminating or making public information or images of them, or committing an act similar to these actions, is punishable by a fine or up to three years in prison. In particularly serious cases, the punishment can be between three months and five years in prison. Additionally, if the offender causes the death of the victim or someone close to them, the penalty is between one year and ten years in prison."


  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // history: {msg: string, ai: boolean}[]
  const prompt = staticPrefix + '\n' + history.map(hist => hist.msg).join("\n");

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt + "\n",
      temperature: 0.9,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.6
    });
    // console.log("got from openai: " + JSON.stringify(response.data));
    history.push({
      msg: response.data.choices[0].text,
      ai: true
    })
    res.status(200).json(history).end();
  } catch(error) {
    console.error(error.response.status, error.response.data);
    res.status(error.response.status).json(error.response.data);
  }
}
