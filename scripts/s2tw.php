<?php
/**
 * Translate simplified Chinese content into traditional Chinese.
 */
$source = getcwd() . "/content/zh-cn/";
$target = getcwd() . "/content/zh-tw/";

translate($source, $target);

function translate($source, $target) {
  $files = [];
  getFiles($source, $files);
  foreach($files as $file) {
    $savePath = str_replace($source, $target, $file);
    $saveDir = dirname($savePath);
    if (!is_dir($saveDir)) {
      if (!mkdir($saveDir, 0744, true)) {
        exit("failed to create directory: {$saveDir}\n");
      }
    }
    $output = exec("opencc -c s2tw -i {$file} -o {$savePath}");
    if ($output) {
      echo $output . "\n";
    }
  }
}

function getFiles($dir, &$result) {
  $files = scandir($dir);

  foreach ($files as $key => $value) {
      $path = realpath($dir . DIRECTORY_SEPARATOR . $value);
      if (!is_dir($path)) {
        $result[] = $path;
      } else if ($value != "." && $value != "..") {
        getFiles($path, $result);
      }
  }
}
