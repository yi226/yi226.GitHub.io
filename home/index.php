<?php
/**
 * a graceful typecho theme
 *
 * @package G
 * @author 季悠然
 * @version 3.3.0
 * @link https://季悠然.space
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;
$this->need('components/header.php');
?>
<div id="container">
    <div id="articles">
        <?php $this->need('components/article.php'); ?>
    </div>
    <div id="articles-switch" class="clear">
        <?php $this->pageLink('更多 >', 'next'); ?>
        <?php $this->pageLink('< 返回', 'prev'); ?>
    </div>
</div>
<?php $this->need('components/footer.php'); ?>
