<?php if (!defined("__TYPECHO_ROOT_DIR__")) exit;
$minInfix = !defined('__TYPECHO_DEBUG__') || __TYPECHO_DEBUG__ != true ? ".min" : ""; ?>

<footer>
    <div id="footer-content">
        <div id="footer-sponsor">
            <?php echo G::getFooterLogos(); ?>
        </div>
        <nav id="footer-nav">
            <a href="<?php Helper::options()->siteUrl() ?>" <?php if ($this->is("index")) : ?> class="nav-focus"<?php endif; ?>>首页</a>
            <?php if ($this->options->enableIndexPage): ?>
                <a href="<?php echo G::getArticlePath(); ?>" <?php if ($this->is("archive") or $this->is("post")) : ?> class="nav-focus"<?php endif; ?>>文章</a>
            <?php endif; ?>
            <?php $this->widget("Widget_Contents_Page_List")->to($pages); ?>
            <?php while ($pages->next()): ?>
                <a href="<?php $pages->permalink(); ?>" <?php if ($this->is("page", $pages->slug)): ?>class="nav-focus"<?php endif; ?> title="<?php $pages->title(); ?>"><?php $pages->title(); ?></a>
            <?php endwhile; ?>
        </nav>
    </div>
    <p id="footer-meta" class="clear">
        <span class="left"><a class="icp" href="<?php $this->options->icpUrl(); ?>" rel="noopener noreferrer"><?php echo G::getICP(); ?></a></span>
        <span class="right"><?php echo $this->options->buildYear . " - " . date("Y"); ?> &copy <?php $this->options->title(); ?></span>
    </p>
</footer>
</div>
<div id="dark-cover"></div>
<?php $this->need("components/toolbar.php"); ?>
<?php $this->need("components/toc.php"); ?>
<?php $this->need("components/sidebar.php"); ?>
<?php $this->footer(); ?>

<script src="<?php echo G::staticUrl("static/js/pjax.min.js"); ?>?v=3.10012"></script>
<?php if($this->options->enableKatex == 1): ?>
    <script src="<?php echo G::staticUrl("static/js/katex.min.js"); ?>"></script>
    <script src="<?php echo G::staticUrl("static/js/auto-render.min.js"); ?>"></script>
<?php endif; ?>
<script src="<?php echo G::staticUrl("static/js/smoothscroll$minInfix.js"); ?>?v=3.215"></script>
<script src="<?php echo G::staticUrl("static/js/toastify.min.js"); ?>?v=3.211"></script>
<script src="<?php echo G::staticUrl("static/js/tocbot.min.js"); ?>?v=3.211"></script>
<script src="<?php echo G::staticUrl("static/js/lib$minInfix.js"); ?>?v=3.10018"></script>
<script src="<?php echo G::staticUrl("static/js/prism.js"); ?>?v=1.03" data-manual></script>
<script src="<?php echo G::staticUrl("static/js/G$minInfix.js"); ?>?v=3.2.8.2"></script>
<script>
    <?php $this->options->customFooterJS(); ?>
</script>
</body>
</html>
