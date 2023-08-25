import express from 'express'
import longestWord from './longestWord.js';
import shortestWord from './shortestWord.js';
import wordLengths from './wordLength.js';
import totalPhoneBill from './totalPhoneBill.js';

const app = express();
app.use(express.json());
app.use(express.static('public'))

const greetings = {
    'english' : 'hello',
    'xhosa'   : 'Molo',
    'zulu'    : 'Sawubona'
}

app.get('/api/greet', function(req, res) {
    const username = req.query.username;
    const language = req.query.language;

    if(!greetings[language]) {
        return res.json({
            error : 'invalid language supplied'
        })
    }

    const greeting = greetings[language];
    res.json({
        message : `${greeting}, ${username}`
    })
});

app.post('/api/greet', function(req, res) {
    const language = req.body.language;
    greetings[language] = req.body.greeting
    res.json({
        status : 'success',
        message: `added a greeting for ${language}` 
    });

});

app.get('/api/greet/', function(req, res){
    console.log(req.params);
    const username = req.query.username;
    res.json({
        message : `Hello, ${username}!`
    })
});



app.get('/api/word_game', function(req, res) {

    const sentence = req.query.sentence;

    if (!sentence) {
        res.json ({
            error : 'Please send in sentence to analyze'
        })
    }

    res.json ({
        "longestWord" : longestWord (sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLengths(sentence),
    });
});


app.post('/api/phonebill/prices', function(req, res) {

    const usage = req.query.usage;

  

    res.json ({
        
        status : 'success',
        message : `The call was set to 2.85`
    });
})

app.get('/api/phonebill/prices', function(req, res) {
console.log(req.param)
res.json({
    "call" : 2.75,
 "sms" : 0.65
})
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`app started on port ${PORT}`);
});