<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit;
$minInfix = !defined('__TYPECHO_DEBUG__') || __TYPECHO_DEBUG__ != true ? ".min" : ""; ?>
<!DOCTYPE HTML>
<html lang="zh">
<head>
    <meta charset="<?php $this->options->charset(); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="viewport">
    <link rel="dns-prefetch" href="//cdn.jsdelivr.net">
    <link rel="dns-prefetch" href="//source.ahdark.com">
    <link rel="icon" type="image/png" href="<?php $this->options->favicon(); ?>">
    <link href="<?php $this->options->favicon(); ?>" rel="icon">
    <link rel='dns-prefetch' href='//s.w.org'>
    <link rel="apple-touch-icon-precomposed" href="<?php $this->options->favicon(); ?>">
    <title><?php $this->archiveTitle(array(
            'category' => _t('分类 %s 下的文章'),
            'search' => _t('包含关键字 %s 的文章'),
            'tag' => _t('标签 %s 下的文章'),
            'author' => _t('%s 发布的文章')
        ), '', ' | '); ?><?php $this->options->title(); ?></title>
    <style>
        /* 输出自定义主题色 */
        <?php echo G::setCSSValues(); ?>
    </style>

    <?php if($this->options->enableKatex == 1): ?>
        <link rel="stylesheet" href="<?php echo G::staticUrl('static/css/katex.min.css'); ?>">
    <?php endif; ?>
    <link rel="stylesheet" href="<?php echo G::staticUrl('static/css/G.css'); ?>?v=3.2337">
    <link rel="stylesheet <?php if (!isset($_COOKIE['night']) || $_COOKIE['night'] != '1') {
        echo 'alternate';
    } ?>" href="<?php echo G::staticUrl("static/css/dark$minInfix.css"); ?>?v=3.228" title="dark">

    <style>
        /* 设置自定义背景[颜色/图片] */
        html::before {
        <?php echo G::getBackground(); ?>
        }

        <?php $this->options->customCSS(); ?>
    </style>
    <?php $this->header(); ?>
    <script src="<?php echo G::staticUrl('static/js/DPlayer.min.js'); ?>"></script>
    <script>
        <?php $this->options->customHeaderJS(); ?>
        
        window.G_CONFIG = {
            katex: <?php echo $this->options->enableKatex == 1 ? 'true' : 'false' ?>,
            imgUrl: "<?php echo G::staticUrl('static/img/'); ?>"
        };

        function custom_callback() {
            <?php echo $this->options->customPjaxCallback; ?>
        }
    </script>
</head>
<body>

<div id="main">
    <header id="header">
        <div id="header-title">
            <h2><?php $this->options->title(); ?></h2>
        </div>
        <div id="header-content">
            <div id="header-content-left">
                <p><?php $this->options->description(); ?></p>
            </div>
            <div id="header-content-right">
                <nav>
                    <a href="<?php $this->options->siteUrl() ?>" <?php if ($this->is('index')) : ?> class="nav-focus"<?php endif; ?>>首页</a>
                    <?php if ($this->options->enableIndexPage): ?>
                        <a href="<?php echo G::getArticlePath(); ?>" <?php if ($this->is('archive') or $this->is('post')) : ?> class="nav-focus"<?php endif; ?>>文章</a>
                    <?php endif; ?>
                    <?php $this->widget('Widget_Contents_Page_List')->to($pages); ?>
                    <?php while ($pages->next()): ?>
                        <?php if (strtolower($pages->slug) == 'links' or strtolower($pages->slug) == 'about' or $pages->fields->headerDisplay == 1): ?>
                            <a
                                <?php if ($this->is('page', $pages->slug)): ?>class="nav-focus"<?php endif; ?>
                                href="<?php $pages->permalink(); ?>"
                                title="<?php $pages->title(); ?>"
                            ><?php $pages->title(); ?></a>
                        <?php endif; ?>
                    <?php endwhile; ?>
                </nav>
            </div>
        </div>
        <?php if ($this->options->headerBackground != ''): ?>
            <img src="<?php $this->options->headerBackground(); ?>" alt="<?php $this->options->title(); ?>" id="header-background">
        <?php endif; ?>
    </header>
