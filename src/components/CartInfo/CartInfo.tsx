import { Box, Button, Grid, Modal, Paper, Typography } from '@material-ui/core';
import Cart from '../../types/Cart';
import Sku from '../../types/Sku';
import './CartInfo.css';

interface CartInfoProps {
  open: boolean;
  handleClose(event: any): void;
  cart: Cart;
  handleRemove(event: any, sku: Sku): void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CartInfo: React.FC<CartInfoProps> = (props) => {
  var lineItems = [] as any[];
  if (props.cart !== undefined && props.cart.lineItems !== undefined) {
    props.cart.lineItems.forEach((item) => {
      const smallImageUrl = item.sku.smallImageUrl;
      lineItems.push(
        <Grid container xs={12} className="productInfo">
          <Grid direction="column" justifyContent="center">
            <Paper>
              <img
                src={smallImageUrl}
                alt={item.product.name}
                className="smallImage"
              />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Typography className="cartProductName">
              {item.product.name}
            </Typography>
            <Grid item container direction="row" justifyContent="flex-end">
              <Typography style={{ marginRight: 40 }}>
                Cantidad: {item.quantity}
              </Typography>
              <Typography>
                Total: <span className="dollars">{item.totalPrice}</span>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Button
              className="removeItemButton"
              variant="contained"
              onClick={(e) => props.handleRemove(e, item.sku)}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      );
    });
  }
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {lineItems}
        <Button
          className="cartButton"
          variant="contained"
          onClick={props.handleClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CartInfo;
