<?php

if (count($_POST) > 0) {
    foreach ($_POST as $key => $value) {
        $value = htmlspecialchars($value); //защита от xss атак
        $$key = trim($value);
    }
};

$arr = [
    'Телефон или email: ' => $phone,
    'Комментарий: '       => $comment,
    'Кнопка: '            => $target
];
if ($utm_source) {
    $arr['Площадка: '] = $utm_source;
};
if ($utm_medium) {
    $arr['Тип рекламы: '] = $utm_medium;
};
if ($utm_campaign) {
    $arr['Кампания: '] = $utm_campaign;
};
if ($utm_term) {
    $arr['Ключевая фраза: '] = $utm_term;
};
if ($utm_content) {
    $arr['Дополнительная информация: '] = $utm_content;
};

//данные для телеграм-бота
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$token = "717731562:AAFnAxAarCnJI14ZpCVE46R_30z7LjgYSTo";
$chat_id = "-357124271";

//Дополнительные данные для отправки
$recepient = "smargelov@gmail.com";
$sitename = "Bryansk3D";
$pagetitle = "Новый запрос с сайта \"$sitename\"";

//Сообщение для почты
foreach ($arr as $key => $value) {
    $message .= "<b>".$key."</b>".$value."<br>";
};

//Сообщение для телеграма
$txt = $pagetitle."%0A";
foreach ($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
};

//Отправка на почту
mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");

//Отправка в телеграм
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");