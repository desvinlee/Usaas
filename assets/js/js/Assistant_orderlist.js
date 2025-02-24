// Data send to Assistant page
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
