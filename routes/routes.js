module.exports = function (shoeFunc) {

    async function home (req, res, next) {
        try {
          res.render('index')
        } catch (error) {
          next(error.stack)
        }
      }


      

      return{
          home,
      }


}