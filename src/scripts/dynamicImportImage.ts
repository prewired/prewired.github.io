import type { ImageMetadata } from "astro";

type CoverImage = {
	src: string;
	alt: string;
};

const importImage = async (coverImage: CoverImage) => {
	// Allows us to dynamically import cover images from the /src/assets/photos/ folder so it can benefit from the optimisations in the <Image> component
	// Used in both MDPageLayout.astro and PostLayout.astro
	// See also https://docs.astro.build/en/recipes/dynamically-importing-images/
	const allImages = import.meta.glob<{ default: ImageMetadata }>("/src/assets/photos/*.{jpeg,jpg,png,gif}");
	const imgPath = "/src/assets/photos/" + coverImage.src;
	if(!allImages[imgPath]) throw new Error(`"${coverImage.src}" does not exist in the /src/assets/photos/ folder`);
	const coverImgData = (await allImages[imgPath]()).default;
	return coverImgData;
};

export default importImage;
