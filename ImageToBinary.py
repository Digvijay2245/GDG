with open('./images/rebase1.jpg', 'rb') as original_file:
    binary_data = original_file.read()

hex_data = binary_data.hex()
# Write the binary data to a new file
with open('./images/rebase1_copy.bin', 'wb') as new_file:
    new_file.write(binary_data)  # Write the binary data to the new file