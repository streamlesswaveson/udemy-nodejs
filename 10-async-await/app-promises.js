const users = [
    {
        id: 1,
        name: 'Jack',
        schoolId: 101
    }
    , {
        id: 2,
        name: 'Susan',
        schoolId: 999
    }
];

const grades = [
    {
        id: 1,
        schoolId: 101,
        grade: 86
    }
    ,
    {
        id: 2,
        schoolId: 101,
        grade: 100
    }
    ,
    {
        id: 3,
        schoolId: 999,
        grade: 74
    }
];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => {
            return user.id === id;
        });

        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id ${id}`)
        }
    });
};

const getGrades = (schoolid) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId == schoolid));
    })
};

getUser(1)
    .then((user) => {
        console.log(user);
    })
    .catch((e) => {
        console.log(e);
    })

getGrades(101)
    .then((grades) => {
        console.log(grades);
    })
    .catch((err) => {
        console.log(err);
    })

// e.g. Andrew has 83% in the class
const getStatus = (userId) => {
    let myUser;

    return getUser(userId)
        .then((user) => {
            myUser = user;
            return getGrades(user.schoolId)
        })
        .then((grades) => {
            //average
            let average = 0;
            if (grades.length > 0) {
                average = grades.map((g) => g.grade).reduce((a, b) => {
                    return a + b;
                }) / grades.length;

                console.log(average);
            }
            // return the string
            return `${myUser.name} has a ${average} in the class`;
        })
};
getStatus(1)
    .then((status) => {
        console.log(status);
    })
    .catch((err) => {
        console.log(err);
    })
