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


<?php
$cookie_name = "ref";
$cookie_value = htmlspecialchars($_GET["ref"]);

if (!isset($_COOKIE[$cookie_name])) {
    setcookie($cookie_name, $cookie_value, time() + (86400 * 90), "/"); // 86400 = 1 day = 90 day cookie
}
?>
<script type="text/javascript">"use strict";var refInput=document.querySelector("#reference > .inputBoxNormal");if(refInput){refInput.value=function getCookie(a){var b="; "+document.cookie,c=b.split("; "+a+"=");if(2==c.length)return c.pop().split(";").shift()}("ref")}</script>
</body>
</html>
