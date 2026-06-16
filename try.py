def mystery_function1(word):
    start = 0
    end = len(word) - 1
    while start < end:
        if word[start] != word[end]:
            return False
        start += 1
        end -= 1
    return True

word = "kayak"
result = mystery_function1(word)
print(f"The word '{word}' is a palindrome: {result}")

def sum_matrix(matrix):
    total = 0
    for row in matrix:
        for element in row:
            total += element
    return total
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
result = sum_matrix(matrix)
print(f"The sum of the elements in the matrix is: {result}")

def get_sum_of_odds(matrix):
    total = 0
    for row in matrix:
        for element in row:
            if element % 2 != 0:
                total += element
    return total
matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
result = get_sum_of_odds(matrix)
print(f"The sum of the odd numbers in the matrix is: {result}")

def can_place_flowers(flowerbed, n):
    count = 0
    for i in range(len(flowerbed)):
        if flowerbed[i] == 0:
            empty_left = (i == 0) or (flowerbed[i - 1] == 0)
            empty_right = (i == len(flowerbed) - 1) or (flowerbed[i + 1] == 0)
            if empty_left and empty_right:
                flowerbed[i] = 1
                count += 1
                if count >= n:
                    return True
    return count >= n
flowerbed = [1, 0, 0, 0, 1]
n = 1
result = can_place_flowers(flowerbed, n)
print(f"Can place {n} flowers in the flowerbed: {result}")

def merge_sorted_arrays(arr1, arr2):
    merged = []
    i = j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            merged.append(arr1[i])
            i += 1
        else:
            merged.append(arr2[j])
            j += 1
    while i < len(arr1):
        merged.append(arr1[i])
        i += 1
    while j < len(arr2):
        merged.append(arr2[j])
        j += 1
    return merged