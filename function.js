function count_variable() { count = 0 }
function get_selection() {
    document.getElementById("c1").innerHTML = "Số lần truy cập: " + count++;
    x = document.getElementById("drop1").options;

    switch (x.selectedIndex) {
        case 0:
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);

            var table = document.getElementById("myTable");

            var row0 = table.insertRow(0);
            var cell01 = row0.insertCell(0);
            var cell02 = row0.insertCell(1);

            var row1 = table.insertRow(1);
            var cell11 = row1.insertCell(0);
            var cell12 = row1.insertCell(1);

            var row2 = table.insertRow(2);
            var cell21 = row2.insertCell(0);
            var cell22 = row2.insertCell(1);

            cell01.innerHTML = "Họ và tên";
            cell02.innerHTML = "Nguyễn Ngọc Trang";
            cell11.innerHTML = "MSSV";
            cell12.innerHTML = "B1907203";
            cell21.innerHTML = "Ngành";
            cell22.innerHTML = "Kỹ thuật cơ điện tử";

            document.getElementById('img').src = 'img/Trang.jpg';

            break
        case 1:
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);

            var table = document.getElementById("myTable");

            var row0 = table.insertRow(0);
            var cell01 = row0.insertCell(0);
            var cell02 = row0.insertCell(1);

            var row1 = table.insertRow(1);
            var cell11 = row1.insertCell(0);
            var cell12 = row1.insertCell(1);

            var row2 = table.insertRow(2);
            var cell21 = row2.insertCell(0);
            var cell22 = row2.insertCell(1);

            cell01.innerHTML = "Họ và tên";
            cell02.innerHTML = "Phạm Văn Trí Thành";
            cell11.innerHTML = "MSSV";
            cell12.innerHTML = "B1907189";
            cell21.innerHTML = "Ngành";
            cell22.innerHTML = "Kỹ thuật cơ điện tử";

            document.getElementById('img').src = 'img/Thanh.jpg';

            break
        case 2:
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);

            var table = document.getElementById("myTable");

            var row0 = table.insertRow(0);
            var cell01 = row0.insertCell(0);
            var cell02 = row0.insertCell(1);

            var row1 = table.insertRow(1);
            var cell11 = row1.insertCell(0);
            var cell12 = row1.insertCell(1);

            var row2 = table.insertRow(2);
            var cell21 = row2.insertCell(0);
            var cell22 = row2.insertCell(1);

            cell01.innerHTML = "Họ và tên";
            cell02.innerHTML = "Trần Minh Tường";
            cell11.innerHTML = "MSSV";
            cell12.innerHTML = "B1907095";
            cell21.innerHTML = "Ngành";
            cell22.innerHTML = "Kỹ thuật cơ điện tử";

            document.getElementById('img').src = 'img/Tuong.jfif';

            break
        case 3:
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);

            var table = document.getElementById("myTable");

            var row0 = table.insertRow(0);
            var cell01 = row0.insertCell(0);
            var cell02 = row0.insertCell(1);

            var row1 = table.insertRow(1);
            var cell11 = row1.insertCell(0);
            var cell12 = row1.insertCell(1);

            var row2 = table.insertRow(2);
            var cell21 = row2.insertCell(0);
            var cell22 = row2.insertCell(1);

            cell01.innerHTML = "Họ và tên";
            cell02.innerHTML = "Lê Trung Vinh";
            cell11.innerHTML = "MSSV";
            cell12.innerHTML = "B1907212";
            cell21.innerHTML = "Ngành";
            cell22.innerHTML = "Kỹ thuật cơ điện tử";

            document.getElementById('img').src = 'img/Vinh.jpg';

            break
        case 4:
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);

            var table = document.getElementById("myTable");

            var row0 = table.insertRow(0);
            var cell01 = row0.insertCell(0);
            var cell02 = row0.insertCell(1);

            var row1 = table.insertRow(1);
            var cell11 = row1.insertCell(0);
            var cell12 = row1.insertCell(1);

            var row2 = table.insertRow(2);
            var cell21 = row2.insertCell(0);
            var cell22 = row2.insertCell(1);

            cell01.innerHTML = "Họ và tên";
            cell02.innerHTML = "Trương Gia Thuận";
            cell11.innerHTML = "MSSV";
            cell12.innerHTML = "B1907080";
            cell21.innerHTML = "Ngành";
            cell22.innerHTML = "Kỹ thuật cơ điện tử";

            document.getElementById('img').src = 'img/Thuan.jfif';

            break
        case 5:
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);
            document.getElementById("myTable").deleteRow(0);

            var table = document.getElementById("myTable");

            var row0 = table.insertRow(0);
            var cell01 = row0.insertCell(0);
            var cell02 = row0.insertCell(1);

            var row1 = table.insertRow(1);
            var cell11 = row1.insertCell(0);
            var cell12 = row1.insertCell(1);

            var row2 = table.insertRow(2);
            var cell21 = row2.insertCell(0);
            var cell22 = row2.insertCell(1);

            cell01.innerHTML = "Họ và tên";
            cell02.innerHTML = "Nguyễn Huỳnh Như Ý";
            cell11.innerHTML = "MSSV";
            cell12.innerHTML = "B1907217";
            cell21.innerHTML = "Ngành";
            cell22.innerHTML = "Kỹ thuật cơ điện tử";

            document.getElementById('img').src = 'img/Y.jfif';

            break
    }
}