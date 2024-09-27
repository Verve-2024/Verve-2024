import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box, Strong, Button, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Verve 2024
			</title>
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66f6d1359710450018a331b5/images/Untitled%20design.svg?v=2024-09-27T15:45:26.680Z"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Image src="https://uploads.quarkly.io/66f6d1359710450018a331b5/images/Untitled%20design.svg?v=2024-09-27T15:45:26.680Z" display="block" width="250px" align-self="center" />
		</Section>
		<Box padding="15px 15px 15px 15px">
			<Text
				font="--headline1"
				color="--dark"
				text-align="center"
				md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				margin="16px 0px 0px 0px"
				sm-font="normal 700 42px/1.2 --fontFamily-sans"
			>
				Verve 2024
			</Text>
			<Components.QuarklycommunityKitLoopText text-align="center" slides="lively,exciting,epic,unforgettable" display="block">
				<Override slot="Before Text">
					The most
				</Override>
				<Override slot="After Text">
					freshers' of Vasavi!
				</Override>
				<Override slot="Looped Text" color="#f2ba19" sm-display="block" />
			</Components.QuarklycommunityKitLoopText>
		</Box>
		<Section padding="80px 0 80px 0" lg-padding="56px 0 56px 0" sm-padding="32px 0 32px 0" background="--color-light">
			<Box
				margin="0px 0px 32px 0px"
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 33px 0px"
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-padding="15px 15px 15px 15px"
				sm-margin="0px 0px 10px 0px"
				justify-content="center"
			>
				<Text
					font="--headline1"
					color="--dark"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					margin="16px 0px 0px 0px"
				>
					Events
				</Text>
				<Text
					font="--lead"
					color="--darkL2"
					text-align="left"
					md-width="100%"
					max-width="none"
					width="1000px"
				>
					<Strong>
						Verve 2024
					</Strong>
					{" "}is the official annual freshers' event at Vasavi College of Engineering, exclusively for first-year students. Organized by last year's title holders,{" "}
					<Strong>
						Verve 2024
					</Strong>
					{" "}will feature a variety of competitions where the most enthusiastic first-years will compete for several titles.
					<br />
					<br />
					First-year students can participate in one or more events, but only the best performers will be honored with their respective titles.
					<br />
					<br />
					<Strong>
						Verve 2024
					</Strong>
					{" "}will take place from{" "}
					<Strong>
						September 30th
					</Strong>
					{" "}to{" "}
					<Strong>
						October 5th
					</Strong>
					, between{" "}
					<Strong>
						4:30 PM and 6:30 PM
					</Strong>
					{" "}each day. Additional buses will be available at{" "}
					<Strong>
						6:30 PM
					</Strong>
					{" "}throughout the week.
				</Text>
			</Box>
			<LinkBox
				display="flex"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-wrap="wrap"
				width="100%"
				margin="0px 0px 16px 0px"
				justify-content="flex-start"
				md-margin="0px 0px 16px 0px"
				href="https://github.com/"
				link-target="_blank"
				target="_blank"
			>
				<Box
					width="100%"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					md-width="100%"
					lg-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/66f6d1359710450018a331b5/images/1.svg?v=2024-09-27T17:18:56.101Z"
						border-radius="24px"
						max-width="100%"
						max-height="522px"
						width="100%"
						object-fit="cover"
						lg-max-height="392px"
						object-position="0% 30%"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-border-width="0px"
					flex-direction="column"
					padding="16px 12px 16px 12px"
				>
					<Text font="--headline3" color="--dark" margin="0px 0px 8px 0px">
						Dance Competition
					</Text>
					<Button
						type="link"
						background="#c26e2a"
						href="https://github.com/"
						align-self="flex-start"
						text-decoration-line="initial"
						text-align="center"
						margin="15px 0px 15px 0px"
						target="_blank"
					>
						Register Now
					</Button>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-wrap="wrap"
				width="100%"
				margin="0px 0px 16px 0px"
				justify-content="flex-start"
				md-margin="0px 0px 16px 0px"
				href="https://github.com/"
				link-target="_blank"
				target="_blank"
			>
				<Box
					width="100%"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					md-width="100%"
					lg-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/66f6d1359710450018a331b5/images/2.svg?v=2024-09-27T17:18:56.111Z"
						border-radius="24px"
						max-width="100%"
						max-height="522px"
						width="100%"
						object-fit="cover"
						lg-max-height="392px"
						object-position="0% 30%"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-border-width="0px"
					flex-direction="column"
					padding="16px 12px 16px 12px"
				>
					<Text font="--headline3" color="--dark" margin="0px 0px 8px 0px">
						Singing and Instrumental contest
					</Text>
					<Button
						type="link"
						background="#c26e2a"
						target="_blank"
						href="https://github.com/"
						align-self="flex-start"
						text-decoration-line="initial"
						text-align="center"
						margin="15px 0px 15px 0px"
					>
						Register Now
					</Button>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-wrap="wrap"
				width="100%"
				margin="0px 0px 16px 0px"
				justify-content="flex-start"
				md-margin="0px 0px 16px 0px"
				href="https://github.com/"
				link-target="_blank"
				target="_blank"
			>
				<Box
					width="100%"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					md-width="100%"
					lg-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/66f6d1359710450018a331b5/images/3.svg?v=2024-09-27T17:18:56.064Z"
						border-radius="24px"
						max-width="100%"
						max-height="522px"
						width="100%"
						object-fit="cover"
						lg-max-height="392px"
						object-position="0% 30%"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-border-width="0px"
					flex-direction="column"
					padding="16px 12px 16px 12px"
				>
					<Text font="--headline3" color="--dark" margin="0px 0px 8px 0px">
						Talent Hunt
					</Text>
					<Button
						type="link"
						background="#c26e2a"
						target="_blank"
						href="https://github.com/"
						align-self="flex-start"
						text-decoration-line="initial"
						text-align="center"
						margin="15px 0px 15px 0px"
					>
						Register Now
					</Button>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-wrap="wrap"
				width="100%"
				margin="0px 0px 16px 0px"
				justify-content="flex-start"
				md-margin="0px 0px 16px 0px"
				href="https://github.com/"
				link-target="_blank"
				target="_blank"
			>
				<Box
					width="100%"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					md-width="100%"
					lg-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/66f6d1359710450018a331b5/images/4.svg?v=2024-09-27T17:18:56.090Z"
						border-radius="24px"
						max-width="100%"
						max-height="522px"
						width="100%"
						object-fit="cover"
						lg-max-height="392px"
						object-position="0% 30%"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-border-width="0px"
					flex-direction="column"
					padding="16px 12px 16px 12px"
				>
					<Text font="--headline3" color="--dark" margin="0px 0px 8px 0px">
						Art Contest
					</Text>
					<Button
						type="link"
						background="#c26e2a"
						target="_blank"
						href="https://github.com/"
						align-self="flex-start"
						text-decoration-line="initial"
						text-align="center"
						margin="15px 0px 15px 0px"
					>
						Register Now
					</Button>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-wrap="wrap"
				width="100%"
				margin="0px 0px 16px 0px"
				justify-content="flex-start"
				md-margin="0px 0px 16px 0px"
				href="https://github.com/"
				link-target="_blank"
				target="_blank"
			>
				<Box
					width="100%"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					md-width="100%"
					lg-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/66f6d1359710450018a331b5/images/5.svg?v=2024-09-27T17:18:56.108Z"
						border-radius="24px"
						max-width="100%"
						max-height="522px"
						width="100%"
						object-fit="cover"
						lg-max-height="392px"
						object-position="0% 30%"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-border-width="0px"
					flex-direction="column"
					padding="16px 12px 16px 12px"
				>
					<Text font="--headline3" color="--dark" margin="0px 0px 8px 0px">
						Fun and Games
					</Text>
					<Button
						type="link"
						background="#c26e2a"
						target="_blank"
						href="https://github.com/"
						align-self="flex-start"
						text-decoration-line="initial"
						text-align="center"
						margin="15px 0px 15px 0px"
					>
						Register Now
					</Button>
				</Box>
			</LinkBox>
		</Section>
		<Section background="#da691a" padding="80px 0 80px 0">
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 30px 0px"
					font="--headline1"
					color="--light"
					text-align="center"
					sm-font="normal 700 62px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Contact Us
				</Text>
				<Text margin="0px 0px 48px 0px" font="--lead" color="--light" text-align="center" />
				<Link
					href="mailto:blank?hello@company.com"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="initial"
					margin="0px 0px 16px 0px"
				>
					Overall Coordinators
				</Link>
				<Link
					href="tel:1234567899"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="initial"
					margin="0px 0px 16px 0px"
				>
					Anika : 7675044907
				</Link>
				<Text margin="0px 0px 48px 0px" font="--headline3" color="--light" text-align="center">
					Vedik : 8019926660
				</Text>
				<SocialMedia instagram="https://instagram.com/vce_verve" margin="0px 0px 0px 0px">
					<Override
						slot="link"
						border-radius="50%"
						color="--grey"
						hover-color="--light"
						background="#191E22"
						hover-background="--color-primary"
						margin="0 5px 0 5px"
						padding="5x 5px 5px 5px"
						width="48px"
						height="48px"
						align-items="center"
						display="flex"
						justify-content="center"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
					/>
					<Override
						slot="icon"
						color="--light"
						padding="7px 7px 7px 7px"
						border-width="0px"
						size="38px"
						border-radius="50px"
					/>
				</SocialMedia>
			</Box>
		</Section>
	</Theme>;
});