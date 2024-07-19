import { Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <BannerContainer>
      <BannerImage
        src="src\images\banner\banner-1-removebg-preview.png"
        alt="Banner"
      />
      <BannerContent>
        <Typography variant="h6">SMART WATCH</Typography>
        <BannerTitle variant="h2">Wellcome to Smart Watch</BannerTitle>

        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
