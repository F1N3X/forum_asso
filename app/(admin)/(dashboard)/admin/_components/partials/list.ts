import type { PartialProps } from "../partials";
import type React from "react";
import PartialsText, { TextDefault, TextSchema } from "./text";
import { z } from "zod";
import { FeatherIconNames } from "@/types/feather";
import PartialsGallery, { GalleryDefault, GallerySchema } from "./gallery";
import PartialsEmbed, { EmbedDefault, EmbedSchema } from "./embed";

interface Partial {
    icon: FeatherIconNames;
    name: string;
    schema: z.ZodObject<any, any>;
    default: any;
    editable: React.ComponentType<PartialProps>;
}

const partialList: { [key: string]: Partial } = {
    text: {
        icon: "type",
        name: "Text",
        schema: TextSchema,
        default: TextDefault,
        editable: PartialsText,
    },
    gallery: {
        icon: "image",
        name: "Gallery",
        schema: GallerySchema,
        default: GalleryDefault,
        editable: PartialsGallery,
    },
    embed: {
        icon: "bookmark",
        name: "Embed",
        schema: EmbedSchema,
        default: EmbedDefault,
        editable: PartialsEmbed,
    },
};

export const getPartialDefault = (type: string) => partialList[type].default;

export default partialList;
