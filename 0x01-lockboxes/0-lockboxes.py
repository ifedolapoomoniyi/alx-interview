




def canUnlockAll(boxes):
    """Determines if all the boxes in a list can be unlocked.

    Args:
        boxes (list): A list of lists. Each index contains a list of integers
            representing the keys to other boxes.

    Returns:
        boolean: True if all boxes can be unlocked, False otherwise.
    """
    # Create a list of all the keys we have.
    keys = [0]
    # Loop through the keys we have.
    for key in keys:
        # Loop through the boxes we have.
        for box in boxes[key]:
            # If we don't have the key, add it to our list.
            if box not in keys:
                keys.append(box)
    # If the length of our keys list is equal to the length of our boxes list,
    # then we have all the keys.
    if len(keys) == len(boxes):
        return True
    return False