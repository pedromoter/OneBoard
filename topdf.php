<?php
include ("mpdf/mpdf.php");




    $html = $_POST['data'];

    $mpdf = new mPDF('en', 'A4', '', '', 3, 3, 3, 3, 3, 3);
    $mpdf->SetDisplayMode('fullpage');
    $mpdf->WriteHTML($html);
    $mpdf->Output();
    exit;





?>