import * as React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function AddressForm({ setAddress }) {
  const [street, setStreet] = React.useState("47/2/2");
  const [ward, setWard] = React.useState("phuong 10");
  const [district, setDistrict] = React.useState("Go Vap");
  const [city, setCity] = React.useState("HCM");
  const getAddresses = () => {
    // get value from form and return
    console.log("address ", street, ward, district, city);
    setAddress({ street, ward, district, city });
  };
  React.useEffect(() => {
    return () => {
      getAddresses();
    };
  }, []);
  return (
    <Grid container spacing={3}>
      {/* <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="Dang"
          autoComplete="first name"
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="Quang"
          autoComplete="last name"
          required
        />
      </FormGrid> */}
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          value={street}
          required
          onChange={(e) => setStreet(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address2">Address line 2</FormLabel>
        <OutlinedInput
          id="address2"
          name="address2"
          type="address2"
          placeholder="Apartment, suite, unit, etc. (optional)"
          autoComplete="shipping address-line2"
          required
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="HCM"
          autoComplete="City"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="district" required>
          District
        </FormLabel>
        <OutlinedInput
          id="district"
          name="district"
          type="district"
          placeholder="Go Vap"
          autoComplete="district"
          required
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="ward" required>
          Ward
        </FormLabel>
        <OutlinedInput
          id="ward"
          name="ward"
          type="ward"
          placeholder="phuong 10"
          autoComplete="shipping ward"
          required
          value={ward}
          onChange={(e) => setWard(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="country"
          placeholder="Viet Nam"
          defaultValue="Viet nam"
          autoComplete="shipping country"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="Use this address for payment details"
        />
      </FormGrid>
    </Grid>
  );
}
