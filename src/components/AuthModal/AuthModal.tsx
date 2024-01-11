import { Card, CardContent, TextField, Box, Typography, Button } from '@mui/material';
import { GoogleConnect } from "../GoogleConnect";
import { FacebookConnect } from "../FacebookConnect";
import { AppleConnect } from "../AppleConnect";
import { EthereumConnect } from "../EthereumConnect";

export const AuthModal = ({
  Facebook,
  Google,
  Apple,
  Web3
}) => {

  const displayProvider = Facebook || Google || Apple || Web3;

  return (
    <Card
      variant="outlined"
      sx={{
        width: "400px",
        textAlign: "center"
      }}
    >
      <Typography
        mt={3}
        variant="h5"
        sx={{
          fontWeight: "bold"
        }}
      >
        Login
      </Typography>

      <CardContent>
        <Box>
          <Box
            sx={{
              display: "grid",
              gap: "10px",
              gridTemplateColumns: "1fr",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />

            <Button variant="contained">Submit</Button>
          </Box>
        </Box>

        {
          displayProvider && (
            <Box mt="14px">
              <Typography>or</Typography>
              <hr/>
              <Box
                sx={{
                  margin: "auto",
                  mt: "18px",
                  display: "grid",
                  gap: "10px",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  placeItems: "center"
                }}
              >
                {
                  Facebook && <FacebookConnect/>
                }
                {
                  Google && <GoogleConnect/>
                }
                {
                  Apple && <AppleConnect/>
                }
                {
                  Web3 && <EthereumConnect/>
                }
              </Box>
            </Box>
          )
        }


      </CardContent>
    </Card>
  )
}