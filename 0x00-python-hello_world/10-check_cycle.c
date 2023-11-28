#include "lists.h"

/**
 * check_cycle - checks if a singly linked list has a cycle in it
 * @list: the beginning of the node's pointer
 * Return: 0 if there is no cycle, 1 if there is a cycle
 * Author: dz1dzor
 */
int check_cycle(listint_t *list)
{
	listint_t *now;
	listint_t *examine;

	if (list->next == NULL || list == NULL)
		return (0);

	now = list;
	examine = now->next;

	while (examine->next != NULL && examine->next->next && now != NULL)
	{
		if (examine == now)
			return (1);

		now = now->next;
		examine = examine->next->next;
	}

	return (0);
}

