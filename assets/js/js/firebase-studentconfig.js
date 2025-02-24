

document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();
    submitOrder();
});

function submitOrder() {
    const studentName = document.getElementById("first_name").value;
    const orderTime = document.getElementById("order_time").value;
    const phoneNumber = document.getElementById("phone_number").value;

    /* if (!studentName || !orderTime || !phoneNumber) {
         alert("Please fill in all details!");
         return;
     } */

    const orderRef = database.ref("orders").push();
    orderRef.set({
        studentName: studentName,
        orderTime: orderTime,
        phoneNumber: phoneNumber,
        status: "Pending"
    });

    alert("Order submitted successfully!");
    document.getElementById("orderForm").reset();
}

// Display Orders in Student Page
function displayStudentOrders() {
    const ordersRef = database.ref("orders");
    ordersRef.on("value", (snapshot) => {
        const tableBody = document.getElementById("studentOrders");
        tableBody.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const order = childSnapshot.val();
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${order.studentName}</td>
              <td>${order.orderTime}</td>
              <td>${order.phoneNumber}</td>
              <td>${order.status}</td>
          `;
            tableBody.appendChild(row);
        });
    });
}

// Load Orders on Page Load
document.addEventListener("DOMContentLoaded", displayStudentOrders);




