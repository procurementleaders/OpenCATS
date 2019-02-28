document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('select[name="department"]').onchange = handleDepartmentChange;
    document.querySelector('select[name="location"]').onchange = handleLocationChange;
    document.querySelector('#reset-job').onclick = handleReset;

}, false);



var jobsList = [...document.getElementsByClassName('job-listing__single-link')];

var jobsTable = jobsList.map(function (i) {

    return {
        id: i.id,
        location: i.dataset.location,
        department: i.dataset.department,
        show: true
    }

});

function resetDepartment() {
    return jobsTable.map(function (elem) {
        document.getElementById(elem.id).classList.remove('hide-department');
    })
}

function resetLocation() {
    return jobsTable.map(function (elem) {
        document.getElementById(elem.id).classList.remove('hide-location');
    })
}

function handleDepartmentChange(event) {
    resetDepartment();

    var value = event.target.value;

    // if all is selected 
    if (value === "all-departments") {
        // Remove all hide department classes
        return jobsTable.map(function (elem) {
            document.getElementById(elem.id).classList.remove('hide-department');
        })
    }

    // find all the elements that doesnt have data-location === event.target.value
    jobsTable.filter(item => item.department !== value).map(function (elem) {
        document.getElementById(elem.id).classList.add('hide-department');
    })

    noJobFind();

    return true;
}

function handleLocationChange(event) {
    resetLocation();

    var value = event.target.value;

    // if all is selected 
    if (value === "all-locations") {
        // Remove all hide department classes
        return jobsTable.map(function (elem) {
            document.getElementById(elem.id).classList.remove('hide-location');
        })
    }

    // find all the elements that doesnt have data-location === event.target.value
    jobsTable.filter(item => item.location !== value).map(function (elem) {
        document.getElementById(elem.id).classList.add('hide-location');
    })

    noJobFind();

    return true;
}

function noJobFind() {
    // add class show error to the html element


    var jobVisible = jobsTable.map(function (elem) {
        return document.getElementById(elem.id).classList.contains('hide-location') === true || document.getElementById(elem.id).classList.contains('hide-department') === true ? null : 1;
    }).filter(item => item).length;

    console.log(jobVisible)

    if (jobVisible === 0) {
        //if all item have hide class than show error:
        document.getElementById('error-job').classList.remove('hide-error');
    } else {
        document.getElementById('error-job').classList.add('hide-error');
    }
}

function handleReset() {

    var departmentSelect = document.querySelector('select[name="department"]');
    var locationSelect = document.querySelector('select[name="location"]');

    for (var i = 0, l = departmentSelect.length; i < l; i++) {
        departmentSelect[i].selected = departmentSelect[i].defaultSelected;
    }

    for (var i = 0, l = locationSelect.length; i < l; i++) {
        locationSelect[i].selected = locationSelect[i].defaultSelected;
    }

    resetDepartment();
    resetLocation();
    noJobFind();
    return true;
}

