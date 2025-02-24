//can copy this config for others js


      // Display Orders in Assistant Page
      function displayAssistantOrders() {
        const ordersRef = database.ref("orders");
        ordersRef.on("value", (snapshot) => {
          const tableBody = document.getElementById("assistantOrders");
          tableBody.innerHTML = "";
          snapshot.forEach((childSnapshot) => {
            const order = childSnapshot.val();
            const orderId = childSnapshot.key;
            if (order.status === "Pending") {
              const row = document.createElement("tr");
              row.innerHTML = `
                  <td>${order.studentName}</td>
                  <td>${order.orderTime}</td>
                  <td>${order.phoneNumber}</td>
                  <td>${order.status}</td>
                  <td><button onclick="acceptOrder('${orderId}')">Accept</button></td>
              `;
              tableBody.appendChild(row);
            }
          });
        });
      }

      // Accept Order Function
      function acceptOrder(orderId) {
        const orderRef = database.ref("orders/" + orderId);
        orderRef.update({ status: "Accepted" }).then(() => {
          alert("Order Accepted!");
        });
      }

      // Load Orders on Page Load
      document.addEventListener("DOMContentLoaded", displayAssistantOrders);


      loadOrders(); // Load when page opens


/** Data send to Assistant page original if got anything undo until here
document.addEventListener('DOMContentLoaded', function () {
displayOrders();
});

function displayOrders() {
    const Assistantorderlist = document.getElementById('Assistantorderlist');
    const studentorders = JSON.parse(localStorage.getItem('studentorders')) || [];
  
    studentorders.forEach((order, index)=>{
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${order.orderTime}</td>
          <td>${order.first_name} ${order.last_name}<br/>
          <span>${order.faculty_name}<br/>${order.phone_number}<br/></span></td>
          <td>${order.service}</td>
          <td><button class="btn btn-primary" type="button" style="background: #0dcaf0;color: rgb(33,37,41);border-radius: 10px;border-color: var(--bs-table-striped-color);width: auto;" onclick="acceptOrder(this)"><strong>Accept</strong></button><br/>
          <button class="btn btn-primary" type="button" style="background: #e74a3b;color: rgb(33,37,41); margin-top: 10px; border-radius: 10px;border-color: var(--bs-table-striped-color);width: auto;" onclick="deleteOrder(${index})"><strong>Delete</strong></button>
          </td>
        `;
  
      Assistantorderlist.appendChild(row);
    });
}

  function deleteOrder(index) {
    let studentorders = JSON.parse(localStorage.getItem('studentorders')) || [];
    studentorders.splice(index, 1);  // Remove the specific order by index
    localStorage.setItem('studentorders', JSON.stringify(studentorders));
    displayOrders();
  }

  //when click the accept button, the status will changed to accepted
function acceptOrder(button) {
    const row = button.parentElement.parentElement;
    row.cells[2].textContent = 'Accepted';
  }
**/