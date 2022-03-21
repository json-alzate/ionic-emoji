export interface Emoji {
    symbol: string,
    title: string,
    url: string,
    image: string,
    block: {
        title: string,
        url: string
    },
    number: string,
    html_code: string,
    css_class: string,
    data_symbol: any
}

interface subCategoryEmojiPack {
    subCategoryName: string,
    items: Emoji[]
}

export interface EmojiPack {
    categoryName: string,
    subCategories: subCategoryEmojiPack[]
}