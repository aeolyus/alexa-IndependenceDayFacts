'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.7e0511e0-dc60-489a-aaad-0be9d1eb38df"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Independence Day Facts';

/**
 * Array containing ice cream facts.
 */
var FACTS = [
	"On July 4, 1776 the American colonies were declared free and independent States from Great Britain and its king.",
	"Thomas Jefferson drafted the Declaration of Independence.",
	"Coincidentally, Thomas Jefferson died on July 4, 1826.",
	"Two other US presidents, John Adams and James Monroe, have also died on July 4.",
	"The first Independence Day was celebrated on July 8, 1776, in Philadelphia and the official signing took place on August 2.",
	"Every 4th of July the Liberty Bell in Philadelphia is tapped – although not actually rung – 13 times in honour of the original 13 American colonies.",
	"The stars on the original American flag were in a circle so all the Colonies would appear equal.",
	"The White House celebrated Independence Day for the first time in 1801.",
	"The first Independence Day was celebrated by around 2.5 million people compared to more than 316 million people today.",
	"Almost 100 years after the Declaration of Independence, in 1870, July 4 was made an official holiday by Congress.",
	"On this day, some 150 million hot dogs will be eaten!",
	"Benjamin Franklin proposed the turkey as the national bird but he was overruled by John Adams and Thomas Jefferson, who recommended the bald eagle."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random ice cream fact from the ice cream facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me an independence day fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
