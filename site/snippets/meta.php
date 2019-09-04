<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="icon" type="image/png" href="favicon.png">
<link rel="mask-icon" href="safari-mask-icon.svg" color="#000">

<title><?= $page->isHomePage() ? $page->title() : $page->title() . ' | ' . $site->title() ?></title>

<link rel="preload" href="<?= url('assets/css/app.css') ?>" as="style">
<link rel="preload" href="<?= url('assets/js/app.js') ?>" as="script">