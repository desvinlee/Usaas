//quantity retrived by student input
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('quantity_input').addEventListener('input', function () {
    const quantity = document.getElementById('quantity_input').value;
    const price = 100 * quantity;

    document.getElementById('total_quantity').textContent = quantity;
    document.getElementById('subtotal_price').textContent = price;
    document.getElementById('total_price').textContent = price;

  });
});




//delete button clear the data




/*
function acceptOrder(index) {
  let studentorders = JSON.parse(localStorage.getItem('studentorders')) || [];

  // Example assistant data; replace with dynamic values
  const assistantName = "John Doe";
  const assistantPhone = "123-456-7890";

  // Update the order status and add assistant information
  studentorders[index].status = 'Accepted';
  studentorders[index].assistantName = assistantName;
  studentorders[index].assistantPhone = assistantPhone;

  localStorage.setItem('studentorders', JSON.stringify(studentorders));
  displayOrders(); // Refresh the assistant page
}
*/


// Data send to student page
document.addEventListener('DOMContentLoaded', function () {
  const studentorderlist = document.getElementById('studentorderlist');
  const studentorders = JSON.parse(localStorage.getItem('studentorders')) || [];

  studentorders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${order.orderTime}</td>
    <td>${order.status === 'Accepted' ?
      `<strong>Assistant:</strong> ${order.assistantName} <br>
       <strong>Phone:</strong> ${order.assistantPhone}` : 'Pending'}</td>
    <td>${order.status}</td>
    <td>
    <button class="btn btn-primary" type="button" style="background: #e74a3b;color: rgb(33,37,41); border-radius: 10px;border-color: var(--bs-table-striped-color);width: auto;" onclick="clearOrders()"><strong>Delete</strong></button>
    </td>
  `;

    studentorderlist.appendChild(row);
  });
});



//save the order data and sent to assistant and student order list
document.getElementById('confirm_button').addEventListener('click', function () {
  const order_time = document.getElementById('order_time').value;
  const first_name = document.getElementById('first_name').value;
  const last_name = document.getElementById('last_name').value;
  const faculty_name = document.getElementById('faculty_name').value;
  const phone_number = document.getElementById('phone_number').value;

  const orderData = {
    orderTime: order_time,
    first_name: first_name,
    last_name: last_name,
    faculty_name: faculty_name,
    phone_number: phone_number,
    status: 'Pending',
    service: 'Registration',

  };

  let studentorders = JSON.parse(localStorage.getItem('studentorders')) || [];
  studentorders.push(orderData);
  localStorage.setItem('studentorders', JSON.stringify(studentorders));

  alert('Order submitted successfully!');
});

