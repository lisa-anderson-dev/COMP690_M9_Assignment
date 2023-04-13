async function init() {
    try {
        const response = await fetch('../../data/employees.json');
        const employees = await response.json();
        return employees;
    } catch(e) {
        console.log(e.message);
    }
}

export {init};
