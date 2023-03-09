  // topUp: (id_user, firstname, lastname, email, password, pin, balance, phone) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(`SELECT * FROM users WHERE id_user=$1`, [id_user],
  //       (error, result) => {
  //         // console.log(result)
  //         if (error) return reject(error.message)
  //         if (result.rows.length === 0) return reject("Id not found! Please check your id again!");
  //         db.query(`UPDATE users SET 
  //         firstname=$2, 
  //         lastname=$3, 
  //         email=$4, 
  //         password=$5, 
  //         pin=$6, 
  //         balance=$7, 
  //         phone=$8 WHERE id_user=$1`, [
  //           uuidv4(),
  //           firstname || result.rows[0].firstname,
  //           lastname || result.rows[0].lastname,
  //           email || result.rows[0].email,
  //           password || result.rows[0].password,
  //           pin || result.rows[0].pin,
  //           balance || result.rows[0].balance,
  //           phone || result.rows[0].phone], (err) => {
  //             if (err) return reject(err.message);
  //             return resolve("Update uang berhasil!")
  //           })
  //       }
  //     )
  //   })
  // }