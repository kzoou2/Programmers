function solution(phone_number) {
    
    const starCount = phone_number.length - 4;
    const stars = "*".repeat(starCount);
    const last = phone_number.slice(-4);
    
    return stars + last;
}