def selection_sort(arr):
    for i in range(len(arr)):
        # print(i)
        main_idx = i  # [3]

        for j in range(i + 1, len(arr)):
            if arr[j] > arr[main_idx]:
                main_idx = j
    print(main_idx)


arr = [3, 2, 1, 4, 6, 9, 7]
selection_sort(arr)
