const companyProfilePic = 'A';// Company profile pic / initial
document.getElementById('company-profile-pic').innerHTML = companyProfilePic;//Adding company pic dynamically


const companyProfileName = 'Alphalinx Inc.';//Company name
document.getElementById('company-profile-name').innerHTML = companyProfileName;//Adding company name dynamically


const compliance = '03';//Compliance
document.getElementById('compliance').innerHTML = compliance;//Add value of compliance dynamically


const profilePic = 'J';//Initial as the profile pic
document.getElementById('profile-pic').innerHTML = profilePic;//Add value for the profile pic


const ProfileName = 'Jacobe James';//Profile name
document.getElementById('profile-name').innerHTML = ProfileName;//Add value for the profile name


const profileEmail = 'Jacobejames@gmail.com';//Profile email
document.getElementById('profile-email').innerHTML = profileEmail;//Add value for the profile email;


///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Function to greet user according to the time
const greetingData = document.getElementById('time-according-greetings')
function greetUser() {
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "Good Morning, ";
    } else if (currentHour < 18) {
        greetingMessage = "Good Afternoon, ";
    } else {
        greetingMessage = "Good Evening, ";
    }

    greetingData.textContent = greetingMessage;
}

greetUser();//Calling the Function

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const userName = 'Emily';//Passing username
document.getElementById('user-name').innerHTML = `${userName}! `;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Application pie chart details

const applicationStatus = [
    {
        id: '1',
        applicationNumbers: '30',
        applicationStatus: 'Approved'
    },
    {
        id: '2',
        applicationNumbers: '56',
        applicationStatus: 'Pending'
    },
    {
        id: '3',
        applicationNumbers: '20',
        applicationStatus: 'Incomplete'
    }
];




// Map application statuses to their corresponding colors
const statusColors = {
    'Approved': '#5BB991',   // Greenish color
    'Pending': '#E77D76',    // Reddish color
    'Incomplete': '#F3B17D'  // Orangish color
};

function drawPieChartAsBackground(applicationStatus) {
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');

    // Extract the application numbers and convert them to integers
    const data = applicationStatus.map(status => parseInt(status.applicationNumbers, 10));
    
    // Map the application statuses to their corresponding colors
    const colors = applicationStatus.map(status => statusColors[status.applicationStatus]);

    const total = data.reduce((acc, val) => acc + val, 0);
    let currentAngle = -0.5 * Math.PI; // Start from the top
    const gapAngle = 0.025   * Math.PI; // Gap size in radians, can udjustable

    data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2); // Center of the canvas
        ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            Math.min(canvas.width / 2, canvas.height / 2),
            currentAngle + gapAngle / 2, // Start angle adjusted by gap
            currentAngle + sliceAngle - gapAngle / 2 // End angle adjusted by gap
        );
        ctx.closePath();
        ctx.fillStyle = colors[index];
        ctx.fill();

        currentAngle += sliceAngle;
    });

    // Convert canvas to data URL
    const backgroundImage = canvas.toDataURL();
    
    // Set the data URL as the background image of the element
    document.getElementById('pie-chart-main-div').style.backgroundImage = `url(${backgroundImage})`;
}

// Draw the pie chart and set it as background
drawPieChartAsBackground(applicationStatus);

function sumOfApplicationNumbers(applicationStatus) {
    //access each map element 
    return applicationStatus.reduce((total, status) => {
        // access each elements application number value and return into function
        return total + parseInt(status.applicationNumbers, 10);
    }, 0);
}


//Total application number passing to the html
document.getElementById('total-application-number').innerHTML = sumOfApplicationNumbers(applicationStatus);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// setting mail counts

const newMails = '21';//setting new mail count
document.getElementById('new-mails').innerHTML = newMails;//setting intopage


const requestedMails = '23';//setting requested mail counts
document.getElementById('requested-mails').innerHTML = requestedMails;//setting into page


const actionRequiredMails = '23';//setting action required mail counts
document.getElementById('action-taken-mails').innerHTML = actionRequiredMails;// setting into page

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// setting compliance count

const newCompliances = '32';//new compliance count
document.getElementById('new-compliances').innerHTML = newCompliances;//setting to page


const progressCompliance = '10';//in progress compliance count
document.getElementById('progress-compliances').innerHTML = progressCompliance;//setting to page


const toApproveCompliance = '23';//to approve compliance count
document.getElementById('to-approve-compliances').innerHTML = toApproveCompliance;//setting to page


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tasksData = [
    {
        task: 'Update Tax Document for Alphalinx...',
        category: 'Compliance',
        dueDate: '23/11/23',
        status: 'Request sent'
    },
    {
        task: 'Update KYC document',
        category: 'Compliance',
        dueDate: '23/11/23',
        status: 'Request sent'
    },
    {
        task: 'Add clearer photo for visa application',
        category: 'Visa center',
        dueDate: '23/11/23',
        status: 'Pending action'
    },
    {
        task: 'Document not clear: please add new file',
        category: 'Visa center',
        dueDate: '23/11/23',
        status: 'Pending action'
    }
];

const paymentData = [
    {
        transactionId: '#764657758',
        date: '23/01/19',
        amount: '$5.99',
        description: 'Mailbox'
    },
    {
        transactionId: '#764657758',
        date: '22/01/19',
        amount: '$99',
        description: 'Registration (upgrade)'
    },
    {
        transactionId: '#764657758',
        date: '21/01/19',
        amount: '$5.99',
        description: 'Mailbox'
    },
    {
        transactionId: '#764657758',
        date: '19/01/19',
        amount: '$5.99',
        description: 'Mailbox'
    },
    {
        transactionId: '#764657758',
        date: '09/01/19',
        amount: '$5.99',
        description: 'Mailbox'
    },
    {
        transactionId: '#764657758',
        date: '23/12/18',
        amount: '$5.99',
        description: 'Mailbox'
    }
];

function getStatusClass(status) {
    switch (status) {
        case 'Request sent':
            return 'request-sent';
        case 'Pending action':
            return 'pending-action';
        default:
            return '';
    }
}

function renderTasksTable(tasks) {
    const tbody = document.getElementById('tasks-tbody');
    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.classList.add('task-row');
        
        row.innerHTML = `
            <td>${task.task}</td>
            <td>${task.category}</td>
            <td>${task.dueDate}</td>
            <td><span class="status ${getStatusClass(task.status)}">${task.status}</span></td>
        `;

        tbody.appendChild(row);
    });
}

function renderPaymentTable(payments) {
    const tbody = document.getElementById('payment-tbody');
    payments.forEach(payment => {
        const row = document.createElement('tr');
        row.classList.add('payment-row');
        
        row.innerHTML = `
            <td>${payment.transactionId}</td>
            <td>${payment.date}</td>
            <td>${payment.amount}</td>
            <td>${payment.description}</td>
        `;

        tbody.appendChild(row);
    });
}


// Render the tasks and payment history tables
renderTasksTable(tasksData);
renderPaymentTable(paymentData);



// render for the mobile
// task table
function renderTasks(tasks) {
    const tasksContainer = document.getElementById('tasks-container');
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <h4>${task.task}</h4>
            <div class="category-duedate">
                <div class="category">Category: <span class="highlight">${task.category}</span></div>
                <div class="due-date">Due date: <span class="highlight">${task.dueDate}<span class="highlight"></div>
            </div>
            <div class="status">${task.status}</div>
        `;
        tasksContainer.appendChild(taskElement);
    });
}



// transaction details table for mobile
function renderTransactions(transactions) {
    const transactionsContainer = document.getElementById('transactions-container');
    transactions.forEach(transaction => {
        const transactionElement = document.createElement('div');
        transactionElement.className = 'transaction';
        transactionElement.innerHTML = `
            <h4>${transaction.transactionId} 
            <div>
                <span class="amount">${transaction.amount}</span> <span class="arrow"><img src="./assets/photos/icons/arrow-down-slim.svg" id="arrow"></span></h4>
            </div
            <div class="category"><span class="date"><span class="date">${transaction.date}</span></div>
            <div class="transaction-details">
                <div>Description</div>
                <div><span class="highlight">${transaction.description}</span></div>
            </div>
        `;
        transactionElement.onclick = function () {
            this.classList.toggle('open');
        };
        transactionsContainer.appendChild(transactionElement);
    });
}

// Render the tasks and transactions on page load
renderTasks(tasksData);
renderTransactions(paymentData);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// to toggle use nav bar for the mobile


let navBarToggle = document.querySelector('.menu-toggle');
let navLinks = document.querySelector('.nav-items');

if(navBarToggle && navLinks){
    navBarToggle.addEventListener('click', () => {
        navLinks.classList.toggle('navItems-active');
        navBarToggle.classList.toggle('navbar-active');
        document.querySelector('.navbar-active') ? document.getElementById('navbar').style.height = '100%': document.getElementById('navbar').style.height = '88px';
        const hamBurgerImg = document.getElementById('nav-control'); 
        document.querySelector('.navbar-active') ? hamBurgerImg.src = './assets/photos/icons/hamburger-close.svg': hamBurgerImg.src = './assets/photos/icons/hamburger.svg';
    })
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////
