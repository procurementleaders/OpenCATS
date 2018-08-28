<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=<?php echo(HTML_ENCODING); ?>" />
        <link href="https://fonts.googleapis.com/css?family=PT+Serif|Roboto:300" rel="stylesheet">
        <title><?php $this->_($this->siteName); ?> - Careers</title>
            <script type="text/javascript" src="../js/careerPortalApply.js"></script>
        <?php global $careerPage; if (isset($careerPage) && $careerPage == true): ?>
            <script type="text/javascript" src="../js/lib.js"></script>
            <script type="text/javascript" src="../js/calendarDateInput.js"></script>
        <?php else: ?>
            <script type="text/javascript" src="js/lib.js"></script>
            <script type="text/javascript" src="js/sorttable.js"></script>
            <script type="text/javascript" src="js/calendarDateInput.js"></script>
			<script type="text/javascript" src="js/careersPage.js"></script>
        <?php endif; ?>
        <style type="text/css" media="all">
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

    <script type="text/javascript">st_init();</script>
    </body>
</html>
