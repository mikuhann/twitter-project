$(document).ready(function () {
    var getDate = function () {
        var tweetDate = new Date,
            tweetHours = tweetDate.getHours(),
            tweetMinutes = tweetDate.getMinutes(),
            tweetDay = tweetDate.getDate(),
            tweetMonth = tweetDate.getMonth(),
            tweetYear = tweetDate.getFullYear();
        var monthsArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        var actualDate = `${tweetDay} ${monthsArray[tweetMonth]} ${tweetYear} года ${tweetHours} часов ${tweetMinutes} минут`;
        return actualDate;
    };
    var tweetCounter = function(){
        var tweetCount = $('.tweet-card').length;
        $('#tweetsCount').text(tweetCount);
    }
    var createTweet = function (date,text) {
        var $tweetBox = $('<div class="card tweet-card">');
        var $tweetDate = $('<div class="tweet-date">').text(date);
        var $tweetText = $('<div class="tweet-text">').text(text).wrapInner('<p></p>');
        var fontSize;
        if (text.length < 100) {
            fontSize = 'tweet-font-size-large';
        } else if(text.length >150) {
            fontSize = 'tweet-font-size-small';
        } else {
            fontSize = 'tweet-font-size-normal';
        }
        $tweetText.addClass(fontSize);
        $tweetBox.append($tweetDate).append($tweetText);
        $('#tweetsList').prepend($tweetBox);
        tweetCounter();
    }
    var tweetsBase = [
        {
            date:'10 июля 2018г.',
            text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam similique quae iste ipsa mollitia!'
        },
        {
            date:'10 июля 2018г.',
            text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam similique quae iste ipsa mollitia!'
        },
        {
            date:'10 июля 2018г.',
            text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam similique quae iste ipsa mollitia!'
        }
    ];
    tweetsBase.forEach(function(tweet){
        createTweet(tweet.date,tweet.text);
    });
    $('#postNewTweet').on('submit', function (e) {
        e.preventDefault();
        var tweetText = $('#tweetText').val();
        createTweet(getDate(),tweetText);
        $('#tweetText').val('');
    });
});