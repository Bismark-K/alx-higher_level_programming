#include <stdlib.h>
#include "lists.h"

/**
 * insert_node - Insert a node in a list
 * @head: Pointer to head of list
 * @number: The number to insert
 *
 * Return: number of nodes
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *fresh, *now = *head;

	if (!head)
		return (NULL);

	new = malloc(sizeof(listint_t));
	if (!fresh)
		return (NULL);

	fresh->n = number;
	fresh->next = NULL;

	if (*head == NULL)
		*head = fresh;
	else if (number < now->n)
	{
		fresh->next = now;
		*head = fresh;
	}
	else
	{
		while (now->next)
		{
			if (number > now->next->n)
				now = now->next;
			else
				break;
		}
		fresh->next = now->next;
		now->next = fresh;
	}

	return (fresh);
}

