import { Alert, Snackbar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
interface IProps{
    isBooked: boolean,
    setIsBooked: (booked:boolean)=>void,
    message: string
}
const AlertMessage = (props:IProps) => {
  return (
    <Snackbar
          open={props.isBooked}
          autoHideDuration={3000}
          onClose={() => props.setIsBooked(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => props.setIsBooked(false)}
            severity='success'
            variant='filled'
            icon={<CheckCircleIcon fontSize='inherit' />}
          >
            {props.message}
          </Alert>
        </Snackbar>
  )
}

export default AlertMessage