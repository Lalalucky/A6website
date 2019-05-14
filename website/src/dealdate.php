<?php

$name=$_POST['Name'];
$tel=$_POST['Tel'];
$type=$_POST['type'];
$email= isset($_POST['Email']) ? $_POST['Email'] :'';
$company=$_POST['Company'];
$roles=$_POST['Checkroles'];
$time=date('Y-m-d h:i:s');
$postData=['type'=>$type,'name'=>$name,'tel'=>$tel,'email'=>$email,'company'=>$company,'roles'=>$roles,'key'=>'cmbohpffXVR03nIpkkQXaAA1Vf5nO4nQ'];
$yunUrl = 'http://www.yiedu.cc/admin/site/apply';
$connectA->post($yunUrl,$postData);

if($type == 'a6'){
    $url='http://www.a6edu.cn/admin/site/apply';
    $res=$connectA->post($url,$postData);
//if ($res == 200) {
//    header("location:success.php");
//}
    if ($res === 200) {
        $result = array(
            'code' => 100,
            'msg'  =>'成功',
        );
        echo json_encode($result);
//    header("location:success.php");
    } else {
        $result = array(
            'code' => 200,
            'msg'  =>'失败',
        );
        echo json_encode($result);
    }
}

if($type == 'a7'){
    $url='http://www.a7.a6edu.com/admin/site/apply';
    $res=$connectA->post($url,$postData);
//if ($res == 200) {
//    header("location:success.php");
//}
    if ($res === 200) {
        $result = array(
            'code' => 100,
            'msg'  =>'成功',
        );
        echo json_encode($result);
//    header("location:success.php");
    } else {
        $result = array(
            'code' => 200,
            'msg'  =>'失败',
        );
        echo json_encode($result);
    }
}


