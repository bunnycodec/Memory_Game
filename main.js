$(document).ready(function(){

    var prevClick = "",minutes,seconds;
    var previousEasy, currentEasy, previousHard, currentHard, previousLegend, currentLegend;
    var count = 0, reset =0, val1 = 0, val2 = 0;
    var clicks=0,levelCount=0,startFlag,startButtonToggle=1,timer=0;

    $("#startButton").on("click", function(){
        clearInterval(timer);
        seconds = 1, minutes=0;
        $("#yourScore span").html("");

        timer=setInterval(function(){
            if(seconds==60)
            {
                minutes++;
                seconds=0;
            }
            if(seconds<10 && minutes<10)
                $('#time span').html("0"+minutes+":0"+seconds);
            else
                $('#time span').html("0"+minutes+":"+seconds);
            seconds++;
        },1000);

        if(startButtonToggle === 1)
        {
            $("#startButton").css('background-color','red');
            $("#startButton").html('RESTART');
            startButtonToggle=0;
        }

        startFlag=1;
        clicks = 0,prevClick = "";
        count = 0, reset =0, val1 = 0, val2 = 0;
        $("#clicks span").html("000");

        if(levelCount === 1)
        {
            previousEasy="", currentEasy="";
            $("#easy li").css('visibility','visible');
            numbersEasy = shuffle(numbersEasy);
            $("#easy li").html('<img class=" img-responsive img-rounded" src="Pictures/Easy_Icon.jpg">');
        }

        if(levelCount === 2)
        {
            previousHard, currentHard;
            $("#hard li").css('visibility','visible');
            numbersHard = shuffle(numbersHard);
            $("#hard li").html('<img class=" img-responsive img-rounded" src="Pictures/Hard_Icon.jpg">');
        }

        if(levelCount === 3)
        {
            previousLegend, currentLegend;
            $("#legend li").css('visibility','visible');
            numbersLegend = shuffle(numbersLegend);
            $("#legend li").html('<img class=" img-responsive img-rounded" src="Pictures/Legend_Icon.jpg">');
        }
    });

    // Scrolling pages
    $(".slide").click(function(e){
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 40
        },1000);
        e.preventDefault();
    });

    // Easy Images

    var numbersEasy = ['<img class=" img-responsive img-rounded" src="Pictures/Easy/1.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/2.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/3.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/4.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/5.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/6.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/7.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/8.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/1.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/2.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/3.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/4.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/5.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/6.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/7.jpg">','<img class=" img-responsive img-rounded" src="Pictures/Easy/8.jpg">'];

    // Hard Images

    var numbersHard = ['<img class=" img-responsive img-rounded" src="Pictures/Hard/1.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/2.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/3.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/4.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/5.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/6.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/7.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/8.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/9.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/10.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/11.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/12.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/13.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/14.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/15.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/16.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/17.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/18.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/1.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/2.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/3.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/4.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/5.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/6.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/7.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/8.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/9.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/10.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/11.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/12.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/13.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/14.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/15.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/16.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/17.png">','<img class=" img-responsive img-rounded" src="Pictures/Hard/18.png">'];

    // Hard Images

    var numbersLegend = ['<img class=" img-responsive img-rounded" src="Pictures/Legend/1.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/2.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/3.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/4.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/5.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/6.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/7.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/8.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/9.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/10.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/11.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/12.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/13.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/14.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/15.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/16.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/17.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/18.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/19.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/20.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/21.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/22.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/23.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/24.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/25.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/26.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/27.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/28.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/29.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/30.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/31.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/32.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/1.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/2.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/3.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/4.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/5.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/6.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/7.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/8.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/9.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/10.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/11.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/12.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/13.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/14.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/15.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/16.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/17.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/18.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/19.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/20.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/21.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/22.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/23.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/24.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/25.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/26.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/27.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/28.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/29.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/30.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/31.png">','<img class=" img-responsive img-rounded" src="Pictures/Legend/32.png">'];


    //------------------------ EASY START ----------------------------//
    //------------ Easy Game Restarting -------------//
    $("#btnEasy").on("click", function(){
        startFlag=0;
        levelCount =1;
        $("#clicks span").html("000");
        clearInterval(timer);
        $("#time span").html("00:00");

        $("#startButton").css('background-color','#e67e22');
        $("#startButton").html('START');
        startButtonToggle=1;

        $("#easy").slideToggle("slow");
        $(".tail p, #startButton").slideDown("slow");
        $("#hard").hide("slow");
        $("#legend").hide("slow");

        $("#easy li").css('visibility','visible');
        $("#easy li").html('<img class=" img-responsive img-rounded" src="Pictures/Easy_Icon.jpg">');
    });

    //------------- Easy Game Click --------------//
    $("#easy li").on("click", function(){

        if((count === 0 || count === 1) && startFlag==1)
        {
            var x = $(this).attr("class");

            if(x !== prevClick)
            {
                previousEasy = currentEasy;
                currentEasy = x;
                $(this).html(numbersEasy[parseInt(x.substring(x.length-2))]);
                val2 = val1;
                val1 = numbersEasy[parseInt(x.substring(x.length-2))];
                count++;
                clicks++;
                if(clicks < 10)
                    $("#clicks span").html("00"+clicks);
                else if(clicks>9 && clicks<100)
                    $("#clicks span").html("0"+clicks);
                else
                    $("#clicks span").html(clicks);
            }

            if(count === 2)
            {
                x = "";
                setTimeout(function(){
                    $("#easy li").html('<img class="flipped  img-responsive img-rounded" src="Pictures/Easy_Icon.jpg">');
                    count = 0;
                    if(val1 === val2)
                        emptyEasy();
                },500);
            }
            prevClick = x;
        }
    });

    //-------- Easy Empty Block Message ----------//
    function emptyEasy(){
        $('#easy .'+currentEasy).css('visibility','hidden');
        $('#easy .'+previousEasy).css('visibility','hidden');
        reset = reset + 2;

        if(reset === numbersEasy.length) 
        {
            clearInterval(timer);
            $("#time span").html("00:00");
            reset = (4000-((minutes*60+seconds)+(clicks*10)))*7;
            $("#yourScore span").html('<h1 id="totalScore">Congrats for Completing ... <br/>Your Score : '+reset/5+'<br /></h1>');
        }
    }

    //----------------------- EASY END ------------------------------//


    //--------------------------- HARD START ------------------------//
    //------------ Hard Game Restarting -------------//
    $("#btnHard").on("click", function(){
        startFlag=0;
        levelCount = 2;
        $("#clicks span").html("000");
        clearInterval(timer);
        $("#time span").html("00:00");

        $("#startButton").css('background-color','#e67e22');
        $("#startButton").html('START');
        startButtonToggle=1;

        $("#hard").slideToggle("slow");
        $(".tail p, #startButton").slideDown("slow");
        $("#easy").hide("slow");
        $("#legend").hide("slow");

        $("#easy li").css('visibility','visible');
        $("#hard li").html('<img class=" img-responsive img-rounded" src="Pictures/Hard_Icon.jpg">');
    });

    //------------------- Hard Game Click --------------//
    $("#hard li").on("click", function(){

        if((count === 0 || count === 1) && startFlag==1)
        {
            var x = $(this).attr("class");

            if(x !== prevClick)
            {
                previousHard = currentHard;
                currentHard = x;
                $(this).html(numbersHard[parseInt(x.substring(x.length-2))]);
                val2 = val1;
                val1 = numbersHard[parseInt(x.substring(x.length-2))];
                count++;
                clicks++;
                if(clicks < 10)
                    $("#clicks span").html("00"+clicks);
                else if(clicks>9 && clicks<100)
                    $("#clicks span").html("0"+clicks);
                else
                    $("#clicks span").html(clicks);
            }

            if(count === 2)
            {
                x = "";
                setTimeout(function(){
                    $("#hard li").html('<img class=" img-responsive img-rounded" src="Pictures/Hard_Icon.jpg">');
                    count = 0;
                    if(val1 === val2)
                        emptyHard();
                },500);
            }
            prevClick = x;
        }
    });

    //-------- Hard Empty Block Message ----------//
    function emptyHard(){
        $('#hard .'+currentHard).css('visibility','hidden');
        $('#hard .'+previousHard).css('visibility','hidden');
        reset = reset + 2;

        if(reset === numbersHard.length) 
        {
            clearInterval(timer);
            $("#time span").html("00:00");
            reset = (4000-((minutes*60+seconds)+(clicks*10)))*7;
            $("#yourScore span").html('<h1 id="totalScore">Congrats for Completing ... <br/>Your Score : '+reset/5+'</h1>');
        }
    }

    //------------------------- HARD END ---------------------------------//



    //------------------------ LEGEND START ------------------------//
    //------------ Legend Game Restarting -------------//
    $("#btnLegend").on("click", function(){
        startFlag=0;
        levelCount = 3;
        $("#clicks span").html("000");
        clearInterval(timer);
        $("#time span").html("00:00");

        $("#startButton").css('background-color','#e67e22');
        $("#startButton").html('START');
        startButtonToggle=1;

        $("#legend").slideToggle("slow");
        $(".tail p, #startButton").slideDown("slow");
        $("#easy").hide("slow");
        $("#hard").hide("slow");

        $("#easy li").css('visibility','visible');
        $("#legend li").html('<img class=" img-responsive img-rounded" src="Pictures/Legend_Icon.jpg">');
    });

    //------------------- Legend Game Click --------------//
    $("#legend li").on("click", function(){

        if((count === 0 || count === 1) && startFlag==1)
        {
            var x = $(this).attr("class");

            if(x !== prevClick)
            {
                previousLegend = currentLegend;
                currentLegend = x;
                $(this).html(numbersLegend[parseInt(x.substring(x.length-2))]);
                val2 = val1;
                val1 = numbersLegend[parseInt(x.substring(x.length-2))];
                count++;
                clicks++;
                if(clicks < 10)
                    $("#clicks span").html("00"+clicks);
                else if(clicks>9 && clicks<100)
                    $("#clicks span").html("0"+clicks);
                else
                    $("#clicks span").html(clicks);
            }

            if(count === 2)
            {
                x = "";
                setTimeout(function(){
                    $("#legend li").html('<img class=" img-responsive img-rounded" src="Pictures/Legend_Icon.jpg">');
                    count = 0;
                    if(val1 === val2)
                        emptyLegend();
                },500);
            }
            prevClick = x;
        }
    });

    //-------- Legend Empty Block Message ----------//
    function emptyLegend(){
        $('#legend .'+currentLegend).css('visibility','hidden');
        $('#legend .'+previousLegend).css('visibility','hidden');
        reset = reset + 2;

        if(reset === numbersLegend.length) 
        {
            clearInterval(timer);
            $("#time span").html("00:00");
            reset = (4000-((minutes*60+seconds)+(clicks*10)))*7;
            $("#yourScore span").html('<h1 id="totalScore">Congrats for Completing ... <br/>Your Score : '+reset/5+'</h1>');
        }
    }

    //----------------------- LEGEND END ------------------------------//


    //------------- Shuffle Array ----------------//
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    //--------------- About Animation -------------------//

    $('.box1, .box2, .box3').click(function (e) {
        $(this).toggleClass('flipped');
    });

});

function start() {
    $("#easy").hide();
    $("#hard").hide();
    $("#legend").hide();
    $(".tail p, #startButton").hide();
    var width,height;
    width = $(window).width();
    height = $(window).height();
    
    if((width < 950) || (height < 850))
        {
            modal.style.display = "block";
        }
    
    //var name = prompt("Please enter your name");
    //while(name == null || name == "")
    //name = prompt("Please enter your name");
    //$("#userName").html("Welcome "+name+"<hr />");
}
