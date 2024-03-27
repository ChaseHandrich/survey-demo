(async () => {
   const survey = require('./survey')
   survey.setUrl('https://raw.githubusercontent.com/ChaseHandrich/survey-demo/main/questions.json')
    console.log(await survey.run())
})()