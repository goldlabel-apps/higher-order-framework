export const getById = (id: string, list: any) => {
    /* 
        If you have a list of objects which have id 
        attributes, you can get return a single object 
        with a matching 
    */
    if (!list.length) return false
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) return list[i]
    }
    return false
}

export const sortByAttribute = (list: any, attribute: string) => {
    // if (!list.length) return false
    // for (let i = 0; i < list.length; i++) {
    //     if (list[i].id === id) return list[i]
    // }
    // console.warn("sortByAttribute", attribute)
    return false
}


const getContentBySlug = (slug: string, posts: any) => {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].data.slug === slug) {
            return posts[i].data
        }
    }
    return false
}
