(function ($) {
    $(document).ready(function () {

        var CHATBOT_CSS = './chatbot.css'
        var CHATBOT_WEB = './chatbot.html'
        var CHATBOT_LOGO = './img/chatbot_animatedIcon.gif'
        var CHATBOT_CLOSE_BTN = './img/close_v2.png'

        $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', CHATBOT_CSS));

        $('body').append('<div class="chatbox-hidden" id="chatbot-chatbox"><iframe src= "' + CHATBOT_WEB + '" class="chatbox-webframe"></iframe><button id="chatbot-close-btn" class="chatbox-closeBtn"><img src="' + CHATBOT_CLOSE_BTN + '" alt="close" class="chatbox-close-pic"></button></div>');
        $('body').append('<div class="chatbot-minIcon-style" id="chatbot-minIcon-div"><a id="chatbot-min-btn"><img src="' + CHATBOT_LOGO + '" class="icon-round"></a></div>');

        var chatbotOpen = document.getElementById('chatbot-min-btn');
        var chatbotClose = document.getElementById('chatbot-close-btn');
        var chatbotBox = document.getElementById('chatbot-chatbox');

        function toggleMenu() {
            // Immediantly show effect
            // chatbotBox.classList.toggle('chatbox-show');
            // JQuery scale show effect
            $("#chatbot-chatbox").toggle('scale');
            $("#chatbot-minIcon-div").toggle('scale');
        };

        chatbotOpen.addEventListener("click", toggleMenu);
        chatbotClose.addEventListener("click", toggleMenu);


        // End of chatbot related stuff above, IE version related function below, hide Chatbot if using IE not Edge

        function GetIEVersion() {
            var sAgent = window.navigator.userAgent;
            var Idx = sAgent.indexOf("MSIE");
          
            // If IE, return version number.
            if (Idx > 0) 
              return 1;
          
            else
              return 0;
          }
          
          if (GetIEVersion() == 1) {
            document.getElementById('chatbot-min-btn').style.display = "none";
          }
          GetIEVersion();
    });
})(jQuery);