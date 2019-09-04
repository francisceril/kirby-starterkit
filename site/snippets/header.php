<!DOCTYPE html>
<html class="no-js" lang="en" prefix="og: http://ogp.me/ns#">
<head>
    <?php snippet('meta') ?>

    <?= css('assets/css/app.css') ?>

    <!--  Replace `no-js` class in root element with `js` -->
    <script>(function(cl){cl.remove('no-js');cl.add('js');})(document.documentElement.classList);</script>

    <?= js('assets/js/app.js', ['defer' => true]) ?>

</head>
<body>