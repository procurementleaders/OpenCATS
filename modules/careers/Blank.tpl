<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-234586-14"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-234586-14');
    </script>
    <meta http-equiv="Content-Type" content="text/html; charset=<?php echo(HTML_ENCODING); ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700|Roboto:300,400,700" rel="stylesheet">
    <link rel="shortcut icon"
          href="https://d38pwt70f9bn29.cloudfront.net/AcuCustom/Sitename/Icon/Favorite/favicon-v2.ico"/>
    <title><?php $this->_($this->siteName); ?> - Careers</title>

<style>
/* Slider */
.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}.carousel-logos-section .carousel-logos .slick-slide {text-align: center;margin: 0 25px;outline: 0;}
</style>

<style type="text/css" media="all">
        html {
            font-size: 16px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box
        }
        h1,
        h2,
        h3,
        .h1-style,
        .h2-style,
        .h3-style {
            font-family: Roboto, sans-serif;
            font-weight: 300
        }
        .h1-style, h1 {
            font-size: 2.75rem;
            margin-bottom: .9375rem;
        }

        .h2-style, h2 {
            font-size: 2rem
        }

        h3, .h3-style {
            font-size: 1.3125rem
        }

        a {
            text-decoration: none
        }

        p {
            font-family: 'PT Serif', serif;
            font-size: 1rem
        }
        .hidden {
            width: 0;
            height: 0;
            position: absolute;
            left: -1000px;
        }
        <?php echo($this->template['CSS']); ?>
</style>

</head>
<body>
<!-- TOP -->
<?php echo($this->template['Header']); ?>

<!-- CONTENT -->
<main>
    <?php echo($this->template['Content']); ?>
</main>
<!-- FOOTER -->
<?php echo($this->template['Footer']); ?>
<script type="text/javascript" src="../js/careerPortalApply.js"></script>
<?php global $careerPage;
if (isset($careerPage) && $careerPage == true): ?>
    <script type="text/javascript" src="../js/lib.js"></script>
    <script type="text/javascript" src="../js/calendarDateInput.js"></script>
<?php else: ?>
    <script type="text/javascript" src="js/lib.js"></script>
    <script type="text/javascript" src="js/sorttable.js"></script>
    <script type="text/javascript" src="js/calendarDateInput.js"></script>
    <script type="text/javascript" src="js/careersPage.js"></script>
<?php endif; ?>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/slick.min.js"></script>
<script type="text/javascript">
$(document).ready(function () {
    if($('.carousel-logos').length>0){
        // Set up carousel with logos
        $('.carousel-logos').slick({
            speed: 9000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false
        });
    }
});
</script>

<?php
$cookie_name = "ref";
if (!isset($_GET["ref"])) {
    /* if url does not contain ref variable */

}else{
    /* if url contains ref variable */

    if(!isset($_COOKIE[$cookie_name])){
        /* set the cookie ref if does not exist*/
        $cookie_value = htmlspecialchars($_GET["ref"]);
        setcookie($cookie_name, $cookie_value, time() + (86400 * 90), "/"); // 86400 = 1 day = 90 day cookie
    }
?>
    <script type="text/javascript">"use strict";var refInput=document.querySelector("#reference > .inputBoxNormal");if(refInput){refInput.value=function getCookie(a){var b="; "+document.cookie,c=b.split("; "+a+"=");if(2==c.length)return c.pop().split(";").shift()}("ref")}</script>
<?php } ?>
</body>
</html>
