export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignup = (history) => {
    history.push("/signup")
}

export const goToEventList = (history) => {
    history.push("/")
}

export const goToEventListDetails = (history) => {
    history.push(`/detalhes/${id}`)
}

export const goToCart = (history) => {
    history.push("/carrinho")
}