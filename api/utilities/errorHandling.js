module.exports = {
 errorType : function(error,res){
    switch(error.status) {
        case 204:
          res.status(error.status);
          res.json({
              error: {
                  message: "No Content"
              }
          })
          break;
    case 301:
      res.status(error.status);
      res.json({
          error: {
              message: "Moved Permanently"
          }
      })
      break;
    case 304:
      res.status(error.status);
      res.json({
          error: {
              message: "Not Modified"
          }
      })
      break;
      case 307:
        res.status(error.status);
        res.json({
            error: {
                message: "Temporary Redirect"
            }
        })
        break;
        case 400:
          res.status(error.status);
          res.json({
              error: {
                  message: "Bad Request"
                  }
          })
        break;
          case 401:
            res.status(error.status);
            res.json({
                error: {
                    message: "Unauthorized"
                    }
            })
            break;
          case 403:
            res.status(error.status);
            res.json({
                error: {
                    message: "Forbidden"
                    }
              })
            break;
            case 404:
              res.status(error.status);
              res.json({
                  error: {
                      message: "Not Found"
                    }
                  })
              break;
            case 405:
              res.status(error.status);
              res.json({
                  error: {
                      message: "Method not Allowed"
                      }
                })
              break;
            case 406:
              res.status(error.status);
              res.json({
                  error: {
                      message: "Not Acceptable"
                      }
                  })
              break;
            case 412:
              res.status(error.status);
              res.json({
                  error: {
                      message: "Precondition Failed"
                      }
                    })
              break;
            case 415:
              res.status(error.status);
              res.json({
                  error: {
                      message: "Unsupported Media Type"
                    }
                  })
              break;
            default:
              res.status(500)
              res.json({
                  error: {
                      message: "Internal Server Error"
                  }
                })
            break;
          }
        }
    };
