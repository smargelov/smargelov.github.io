<?php
$xxx =$_POST["xxx"];

$name=$_POST["name"];
$email=$_POST["email"];
$mess=$_POST["mess"];  
if (isset ($name))
{
$name = substr($name,0,20); //Не может быть более 20 символов
if (empty($name))
{
echo "<center><b>Не указано имя.<p>";
echo "<a href=/#contacts>Вернуться и правильно заполнить форму.</a>";
exit;
}
}
else 
{
$name = "не указано";
}
if (isset ($email))
{
$email = substr($email,0,30); //Не может быть более 30 символов
if (empty($email))
{
echo "<center><b>Не указан e-mail.<p>";
echo "<a href=/#contacts>Вернуться и правильно заполнить форму.</a>";
exit;
}
}
else 
{
$email = "не указано";
}
if (isset ($mess))
{
$mess = substr($mess,0,1000); //Не может быть более 1000 символов
if (empty($mess))
{
echo "<center><b>Нет текста сообщения.<p>";
echo "<a href=/#contacts>Вернуться и правильно заполнить форму.</a>";
exit;
}
}
else 
{
$mess = "не указано";
}
$i = "не указано";
if ($name == $i AND $email == $i AND $mess == $i)
{
echo "Ошибка ! Скрипту не были переданы параметры !";
exit;
}
$to = "smargelov@gmail.com";  /*МЕНЯЕШЬ НА СВОЙ АДРЕСС!*/
$subject = "Сообщение с сайта santeh-san.ru";
$message = "Имя:$name::::::::::Электронный адрес:$email::::::::::Сообщение:$mess:::::::::IP-адрес:$REMOTE_ADDR";
mail ($to,$subject,$message) or print "Не могу отправить письмо.";
echo "<center><b>Спасибо за отправку вашего сообщения<br><a href=../../../>Нажмите</a>, чтобы вернуться на Главную страницу сайта";
exit;
?>