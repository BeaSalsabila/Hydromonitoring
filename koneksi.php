<?php
	date_default_timezone_get("Asia/Jakarta");
	$conn = mysqli_connect("localhost", "root", "", "tes");
	if (mysqli_connect_errno()) {
		echo "Oops! Koneksi ke database gagal : -->" mysqli_connect_error();
	}

?>