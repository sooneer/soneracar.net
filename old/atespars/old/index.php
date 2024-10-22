<?php

$fileList = glob('test/*');
foreach($fileList as $filename){
    if(is_file($filename)){
        echo $filename, '<br>'; 
    }   
}
?>